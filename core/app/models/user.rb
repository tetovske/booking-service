# frozen_string_literal: true

class User < ApplicationRecord
  has_many :user_roles, dependent: :destroy
  has_many :roles, through: :user_roles, dependent: :destroy
  has_many :bookings, dependent: :destroy
  has_many :bookings_where_expert, class_name: 'Booking', foreign_key: 'expert_id', dependent: :destroy,
                                   inverse_of: :user
  has_many :appointment_with_experts, through: :bookings, source: 'expert'
  scope :experts, -> { joins(:roles).where(roles: { name: Role::EXPERT_ROLE_NAME }) }
  scope :admins, -> { joins(:roles).where(roles: { name: Role::ADMIN_ROLE_NAME }) }
  scope :default_users, -> { joins(:roles).where(roles: { name: Role::DEFAULT_USER_ROLE_NAME }) }

  after_create_commit :setup_default_role

  def setup_default_role
    UserRole.setup_default_role(self)
  end

  def make_admin
    grant_role(Role::ADMIN_ROLE_NAME)
  end

  def make_expert
    grant_role(Role::EXPERT_ROLE_NAME)
  end

  def revoke_admin
    revoke_role(Role::ADMIN_ROLE_NAME)
  end

  def revoke_expert
    revoke_role(Role::EXPERT_ROLE_NAME)
  end

  def admin?
    roles.any?(&:admin?)
  end

  def expert?
    roles.any?(&:expert?)
  end

  private

  def grant_role(role_name)
    UserRole.grant_user_role(self, role_name)
  end

  def revoke_role(role_name)
    UserRole.revoke_user_role(self, role_name)
  end
end

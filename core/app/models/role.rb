# frozen_string_literal: true

class Role < ApplicationRecord
  DEFAULT_USER_ROLE_NAME = 'user'
  EXPERT_ROLE_NAME = 'expert'
  ADMIN_ROLE_NAME = 'admin'
  ALL_ROLES = %w[user expert admin].freeze

  enum name: { user: DEFAULT_USER_ROLE_NAME, expert: EXPERT_ROLE_NAME, admin: ADMIN_ROLE_NAME }

  has_many :user_roles, dependent: :destroy
  has_many :users, through: :user_roles, dependent: :destroy

  validates :name, uniqueness: true, presence: true

  class << self
    def enum_list
      ALL_ROLES
    end

    def default_role
      Role.find_by(name: DEFAULT_USER_ROLE_NAME)
    end
  end
end

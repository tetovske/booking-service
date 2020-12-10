# frozen_string_literal: true

class UserRole < ApplicationRecord
  belongs_to :user
  belongs_to :role

  class << self
    def setup_default_role(user)
      create(user: user, role: Role.default_role)
    end

    def grant_user_role(user, role_name)
      create(user: user, role: Role.find_by(name: role_name))
    end

    def revoke_user_role(user, role_name)
      find_by(user: user, role: Role.find_by(name: role_name))&.destroy
    end
  end
end

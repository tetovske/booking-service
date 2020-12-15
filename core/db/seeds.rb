# frozen_string_literal: true

require 'faker'

# Generating default roles
Role.enum_list.each { |role_name| Role.create name: role_name }

# Generate random users
10.times do
  user = User.create(uid: Faker::Number.number(digits: 10))
  user.make_expert if [true, false].sample
end

# Creating some bookings
4.times do
  Booking.create(user: User.default_users.sample,
                 expert: User.experts.sample,
                 time_slot: DateTime.current + 2.days)
end

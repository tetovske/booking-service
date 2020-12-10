# frozen_string_literal: true

class Booking < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :expert, class_name: 'User'

  validates :expert_id, :time_slot, presence: true
  validates :user_id, uniqueness: { scope: %i[expert_id time_slot] }, if: -> { reserved? }
  validates :expert_id, uniqueness: { scope: :time_slot }, unless: -> { reserved? }
  validate :booking_validation
  validate :datetime_validation
  scope :unused, -> { where(user_id: nil) }

  def reserved?
    !user.nil?
  end

  def checkin_user(user)
    update(user: user) unless reserved?
  end

  def cancel_appointment
    update(user: nil)
  end

  private

  def datetime_validation
    return if date_valid?

    errors.add(:base, 'Invalid date for slot')
  end

  def booking_validation
    return if expert&.expert? && expert != user

    errors.add(:base, 'User role error')
  end

  def date_valid?
    !time_slot.past?
  end
end

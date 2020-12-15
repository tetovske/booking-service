# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_29_233242) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "expert_id", default: 0, null: false
    t.datetime "time_slot", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["expert_id"], name: "index_bookings_on_expert_id"
    t.index ["time_slot", "expert_id"], name: "index_bookings_on_time_slot_and_expert_id", unique: true
    t.index ["user_id", "expert_id", "time_slot"], name: "index_bookings_on_user_id_and_expert_id_and_time_slot", unique: true
    t.index ["user_id"], name: "index_bookings_on_user_id"
  end

# Could not dump table "roles" because of following StandardError
#   Unknown type 'booking_service_role' for column 'name'

  create_table "user_roles", force: :cascade do |t|
    t.bigint "role_id"
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["role_id"], name: "index_user_roles_on_role_id"
    t.index ["user_id"], name: "index_user_roles_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "uid"
  end

  add_foreign_key "bookings", "users"
  add_foreign_key "bookings", "users", column: "expert_id"
  add_foreign_key "user_roles", "roles"
  add_foreign_key "user_roles", "users"
end

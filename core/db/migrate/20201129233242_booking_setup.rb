class BookingSetup < ActiveRecord::Migration[6.0]
  def change
    reversible do |dir|
      dir.up do
        create_table :roles do |t|
          execute <<-SQL
            CREATE TYPE booking_service_role AS ENUM ('user', 'admin', 'expert');
          SQL
          t.column :name, :booking_service_role, default: 'user', null: false
          t.timestamps
        end
        create_table :users do |t|
          t.column :uid, :string
        end
        create_table :user_roles do |t|
          t.references :role, foreign_key: true
          t.references :user, foreign_key: true
          t.timestamps
        end
        create_table :bookings do |t|
          t.references :user, foreign_key: { to_table: :users }
          t.references :expert, foreign_key: { to_table: :users }, default: 0, null: false
          t.datetime :time_slot, default: -> { 'CURRENT_TIMESTAMP' }, null: false
          t.timestamps
        end
        add_index :roles, :name, unique: true
        add_index :bookings, %i[user_id expert_id time_slot], unique: true
        add_index :bookings, %i[time_slot expert_id], unique: true
      end
      dir.down do
        drop_table :user_roles
        drop_table :roles
        drop_table :bookings
        drop_table :users
        execute <<-SQL
          DROP TYPE booking_service_role;
        SQL
      end
    end
  end
end

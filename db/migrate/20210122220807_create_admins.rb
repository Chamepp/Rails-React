class CreateAdmins < ActiveRecord::Migration[6.0]
  def change
    create_table :admins do |t|
      t.string :username, null: false
      t.integer :key, null: false
      t.string :password_digest, null: false

      t.timestamps
    end
  end
end

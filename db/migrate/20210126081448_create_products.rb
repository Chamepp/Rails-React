class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.integer :number, null: false
      t.string :title, null: false
      t.decimal :price, null: false, precision: 5, scale: 2, default: 0
      t.string :category, null: false
      t.text :description, null: false

      t.timestamps
    end
  end
end

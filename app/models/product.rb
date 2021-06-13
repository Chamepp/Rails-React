class Product < ApplicationRecord
    validates :number, :title, :category, presence: true
    validates :price, presence: true
    validates :description, presence: true,  length: { minimum: 20, maximum: 200 }
    has_one_attached :image
end

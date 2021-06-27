class Product < ApplicationRecord
    validates :number, :title, :category, presence: true
    validates :price, presence: true
    validates :description, presence: true,  length: { minimum: 20, maximum: 200 }
    validates :image, presence: true
    has_one_attached :image

  # Get Image
  def image_url
    Rails.application
                    .routes
                    .url_helpers
                    .rails_blob_path(image, :only_path => true)
  end
end

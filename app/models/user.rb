class User < ApplicationRecord
    has_secure_password
    validates_presence_of :email
    validates_uniqueness_of :email

    validates :firstname, :lastname, presence: true, length: { minimum: 2, maximum: 20 }
    validates :phone, :email, presence:true
    validates :password, presence: true, length: { minimum: 6 }
end

class Api::V1::RegistrationsController < ApplicationController


  # Main Preview
  def index
  end

  # Create Users
  def create
    @user = User.create!(user_params)
  end

  # Destroy Users
  def destroy
    @user = User.find(params[:id])
    @user.destroy

    render json: {
      status: :delete,
      destroyed: true
    }
  end
  

  private
  def user_params
    params.permit(:firstname, :lastname, :phone, :email, :password, :password_confirmation)
  end
  
end

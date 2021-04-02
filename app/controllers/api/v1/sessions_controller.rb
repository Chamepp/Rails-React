class Api::V1::SessionsController < ApplicationController
  include CurrentUserConcern

  # Main Preview
  def index
    @user = User.all
    render json: @user
  end

  # Create Sessions
  def create
    @user = User.find_by_email(params[:session][:email])
    
    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      render json: {
        status: :created,
        logged_in: true,
        user: @user
      }
    else
      render json: {
        status: 401
      }
    end
  end

  # Destroy Sessions
  def destroy
    reset_session
  end

  # Sessions Status
  def logged_in
    if @current_user
      render json: {
        logged_in: true,
        user: @current_user
      }
    else
      render json: {
        logged_in: false
      }
    end
  end


  # Sessions Kill
  def logout
    reset_session
    render json: {
      status: 200,
      logged_out: true
    }
  end

end

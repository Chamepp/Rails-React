class Api::V1::AdminSessionController < ApplicationController
  include CurrentAdminConcern
  
  

  # Main Preview
  def index
  end


  # Create Sessions
  def create
    @admin = Admin.find_by_username(username: params[:username])

    if @admin && @admin.authenticate(params[:password])
      session[:admin_id] = @admin.id
      render json: {
        status: :created,
        logged_in: true,
        user: @admin
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
    if @current_admin
      render json: {
        admin_logged_in: true,
        admin: @current_admin
      }
    else
      render json: {
        admin_logged_in: false
      }
    end
  end


  # Kill Sessions
  def logout
    reset_session
    render json: {
      status: 200,
      admin_logged_out: true
    }
  end

end

class UserController < ApplicationController
  skip_before_filter :redirect_if_no_user_session, :only => [:signout, :register]
  def register
    user = User.new(name: params[:name], email: params[:email], password: params[:password], password_confirmation: params[:cpassword])

    if(user.save)
      reset_session
      load_user_to_session(session,user)

      render json: {}, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def login
  end

  def logout
    session.delete(:USER)
    reset_session
    @current_user = nil

    redirect_to root_url
  end
end

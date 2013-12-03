class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :app_constants
  before_filter :redirect_if_no_user_session

  private

    def app_constants
      @current_user = session[:USER]
      gon.userLoggedIn = is_user_logged_in?
      gon.username = current_user_name
    end

    def redirect_if_no_user_session
      unless(@current_user.blank? or @current_user[:id].blank?)
        return;
      end

      render :json => { alert: 'You should login to continue', redirect: root_url}, :status => 401
    end

  protected
    def current_user_name
      return @current_user[:name] if is_user_logged_in?
    end
    
    def current_user_id
      return @current_user[:id] if is_user_logged_in?
    end

    def is_user_logged_in?
      return !(@current_user.blank? or @current_user[:id].blank?)
    end

    def load_user_to_session(session,user)
      session[:USER] = {
        id:user.id,
        name:user.name,
        email:user.email
      }
    end
end

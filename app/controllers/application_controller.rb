class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :app_constants
  before_filter :redirect_if_no_user_session

  private

    def app_constants
      gon.userLoggedIn = false
      gon.username = current_user_name
    end

    def redirect_if_no_user_session
      unless(@current_user.blank? or @current_user[:id].blank?)
        return;
      end

      if request.xhr?
        render :json => { alert: 'You should login to continue', redirect: root_url}, :status => 401
      elsif !Rails.application.routes.url_helpers.root_path
        redirect_to root_url;
      end
    end

  protected
    def current_user_name
      return "Anirudh";
    end
end

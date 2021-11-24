class ApplicationController < ActionController::Base
  # ignore token
  protect_from_forgery with: :null_session
end

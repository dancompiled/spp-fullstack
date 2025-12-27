
class ThemesController < ApplicationController
  def update
    theme = params[:theme].in?(%w[light dark]) ? params[:theme] : "light"

    if defined?(current_user) && current_user.present?
      current_user.update(theme: theme)
    end

    cookies.permanent[:theme] = theme

    head :ok
  end
end

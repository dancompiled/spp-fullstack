# app/helpers/theme_helper.rb
module ThemeHelper
  def current_theme
    if defined?(current_user) && current_user.present?
      current_user.theme.presence || "light"
    else
      cookies[:theme] || "light"
    end
  end

  def opposite_theme
    current_theme == "light" ? "dark" : "light"
  end
end

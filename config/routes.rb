Rails.application.routes.draw do


  namespace :api do
    namespace :v1 do

      get 'registrations/index'
      post 'registrations/create'

      get 'sessions/index'
      post 'sessions/create'
      get 'sessions/logged_in', to: "sessions#logged_in"
      delete 'sessions/logout', to: "sessions#logout"

      get 'admin/index'
      post 'admin_session/create'
      get 'admin_session/logged_in', to: "admin_session#logged_in"
      delete 'admin_session/logout', to: "admin_session#logout"

      get 'administration/index'

      get 'products/index'
      post 'products/create'
      get 'herbals/show'

      
    end
  end

  
  root 'index#index'
  
  get '/*path' => 'index#index', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }

end

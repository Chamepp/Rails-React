class Api::V1::ProductsController < ApplicationController
  
  # Main Preview
  def index
    @product = Product.paginate(:page => params[:page], per_page: 3).order(created_at: :desc)
    @allProducts = Product.all
    
    render json: {
      products: @product,
      allProducts: @allProducts,
      page: @product.current_page,
      pages: @product.total_pages
    }
  end

  # Create Products
  def create
    @product = Product.create!(product_params)

    if @product.save
      render json: {
        status: :build,
        created: true
      }
    else
      render json: {
        status: :build,
        created: false
      }
    end
  end

  # Show Products
  def show
    @product = Product.find(params[:id])
  end

  # Edit Products
  def edit
    # Do Authentication
    @product = Product.find(params[:id])
  end

  # Update Products
  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
      render json: {
        status: :update,
        updated: true
      }
    else
      render json: {
        status: :update,
        updated: false
      }
    end
  end
  
  # Destroy Products
  def destroy
    @product = Product.find(params[:id])
    @product.destroy

    render json: {
      status: :delete,
      destroyed: true
    }
  end

  
  private
  # Products Params
  def product_params
    params.require(:product).permit(:number, :title, :price, :category, :description, :image)
  end

end

class FactsController < ApplicationController

  before_action :set_fact, only: [:show, :edit, :update, :destroy]
  skip_before_filter :redirect_if_no_user_session, :only=>[:index]

  # GET /facts
  # GET /facts.json
  def index
    if(params[:sort].blank? || params[:sort] == 'Author')
      sort_order = "users.name";
    elsif(params[:sort] == 'Title')
      sort_order = "facts.title";
    elsif(params[:sort] == 'Content')
      sort_order = "facts.content";
    end
    @facts = Fact.where("is_active = true").includes(:user).order(sort_order).load
  end

  # GET /facts/1
  # GET /facts/1.json
  def show
  end

  # GET /facts/new
  def new
    @fact = Fact.new
  end

  # GET /facts/1/edit
  def edit
  end

  # POST /facts.json
  def create
    @fact = Fact.new(title: params[:title], content: params[:content], is_active: true, user_id: current_user_id)

    if @fact.save!
      render json: {id:@fact.id, title:@fact.title, content:@fact.content, username: @fact.user.name, user_id:@fact.user.id}, status: :created
    else
      render json: @fact.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /facts/1
  # PATCH/PUT /facts/1.json
  def update
    @updatedCount = Fact.where(["user_id = ? and id = ?", current_user_id, params[:id]]).update_all(["content = ?, title=?, updated_at = ?",params[:content], params[:title], Time.now.utc])

    if(@updatedCount == 1)
      head :no_content
    else
      render json: {}, status: 401
    end
  end

  # DELETE /facts/1
  # DELETE /facts/1.json
  def destroy
    @updatedCount = Fact.where(["user_id = ? and id = ?", current_user_id, params[:id]]).update_all(["is_active = ?, updated_at = ?",false, Time.now.utc])

    if(@updatedCount == 1)
      head :no_content
    else
      render json: {}, status: 401
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_fact
      @fact = Fact.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def fact_params
      params[:fact]
    end
end

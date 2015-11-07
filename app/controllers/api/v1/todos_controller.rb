module Api
  module V1
    class TodosController < ApplicationController
      skip_before_filter :verify_authenticity_token
      respond_to :json

      def index
        respond_with(Todo.all.order("completed ASC").order("id DESC"))
      end

      def show
        respond_with(Todo.find(params[:id]))
      end

      def create
        @todo = Todo.new(todo_params)
        if @todo.save
          respond_to do |format|
            format.json { render :json => @todo }
          end
        end
      end

    end
  end
end

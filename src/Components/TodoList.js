import React, {useContext} from "react";
import TodosContext from "../Contexts/Todos";

function TodoList() {
    const todosContext = useContext(TodosContext)
    console.log(todosContext)
    return (
        <div className="col-6 mt-3">
            <div className="col-12 border-top border-bottom m-1 p-0">
                <div className="d-flex col-12 p-2 align-items-center">
                    <h6 className="col-8 text-left mb-0">

                    </h6>
                    <div className="col-4 m-1">
                        <div className="btn-group"
                             role="group"
                             aria-label="Basic example">
                            <button type="button"
                                    className="btn btn-success">Done
                            </button>
                            <button type="button"
                                    className="btn btn-primary">Edit
                            </button>
                            <button type="button"
                                    className="btn btn-danger">Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList
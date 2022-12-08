<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API - CUD</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
    <link rel="stylesheet" href="src/CSS/index.css">
    <link rel="stylesheet" href="src/CSS/animation.css">
</head>

<body>
    <div id="overlay"></div>
    <div id="toast"></div>
    <div class="container mt-5 mb-5 d-flex flex-column align-items-center">
        <div class="title text-center mb-5">
            <h1>API</h1>
        </div>
        <div id="box_modal_update" class="border bg-white">
            <div class="text-center m-5">
                <h3>Update</h3>
            </div>
            <div class="form-group">
                <label class="form-label">ID</label>
                <input type="number" readonly id="id_update" name="id_update" class="form-control bg-white" placeholder="ID">
            </div>
            <div class="form-group">
                <label class="form-label">Name</label>
                <input type="text" id="name_update" name="name_update" class="form-control" placeholder="Name">
            </div>
            <div class="form-group">
                <label class="form-label">Age</label>
                <input type="number" id="age_update" name="age_update" class="form-control" placeholder="Age">
            </div>
            <div class="form-group text-center pt-5">
                <input id="btn_update" type="button" name="btn_update" class="btn btn-outline-dark w-25" value="Update">&emsp;
                <input id="close_box_update" type="button" class="btn btn-outline-danger w-25" value="Cancel">
            </div>
        </div>
        <input type="button" id="add_items" class="btn btn-primary w-50" data-toggle="modal" data-target="#exampleModalCenter" value="Add Item">
        <div id="box_modal">
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-zoom modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div class="modal-title" id="exampleModalLabel">Add Items</div>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="" class="form-label">Name User</label>
                                <input type="text" name="name" id="name" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="" class="form-label">Tuổi</label>
                                <input type="number" name="age" id="age" class="form-control">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" id="btn_submit" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container mb-5 bg-white" >
        <table id="example" class="table p-5 text-center">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
    <!-- Lib -->
    <script src="src/JS/lib/axios.min.js"></script>
    <script src="src/JS/lib/jquery.min.js"></script>

    <script src="src/JS/lib/popper.min.js"></script>
    <script src="src/JS/lib/bootstrap.min.js"></script>
    <!-- JS File -->
    <script src="src/JS/view.js"></script>
    <script src="src/JS/main.js"></script>
    <script src="src/JS/toast.js"></script>
</body>

</html>
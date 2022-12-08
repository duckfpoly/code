<?php 
    include('connectdb.php');
    $error = array();
    if(!empty($_POST['submit'])) { 
        $name = isset($_POST['name']) ? $_POST['name'] : "" ;
        $age = isset($_POST['age']) ? $_POST['age'] : "" ;
        $description = isset($_POST['description']) ? $_POST['description'] : "" ;
        if(isset($_FILES['file']['name'])){
            $allow_upload = true;
            $target_dir = "images/";
            $name_images = $_FILES['file']['name'];
            $target_file = $target_dir.$name_images;
            $maxFileSize = 80000000;
            $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
            // tạo ra mảng gồm những loại file cho phép upload
            $allowTypes = [
                'jpg','png','jpeg','gif'
            ];
            // Kiểm tra kích thước file upload không được vượt quá giới hạn
            if($_FILES['file']['size'] > $maxFileSize){
                // echo 'Không được upload ảnh >&nbsp;'.$maxFileSize.'&emsp;byte';
                $error['image'] = 'Không được upload ảnh >&nbsp;'.$maxFileSize.'&emsp;byte';
                $allow_upload = false;
            }
            // kiểm tra kiểu file
            if(!in_array($imageFileType,$allowTypes)){
                // echo 'Chỉ được upload các định dạng JPG, PNG, JPEG, GIF';
                $error['image'] = 'Chỉ được upload các định dạng JPG, PNG, JPEG, GIF';
                $allow_upload = false;
            }
            if($allow_upload == true){
                // sử dụng hàm moveUploadFile
                $name_file = $_FILES['file']['tmp_name'];
                move_uploaded_file($name_file , $target_file);
            }
        }
        if(empty($name)){
            $error['name'] = 'Please enter name.';
        }
        if(empty($age)){
            $error['age'] = 'Please enter age.';
        }
        if(empty($description)){
            $error['description'] = 'Please enter description.';
        }
        if(!$error){ 
            $sql = "INSERT INTO `students`(`name`, `age`, `avatar`, `description`, `created_at`) 
            VALUES ('{$name}','{$age}','{$name_images}','{$description}',now())";
            $query = $conn->prepare($sql);
            $query->execute();
            echo "<script>alert('Thêm sinh viên thành công !');location.href='?page=view'</script>";
        }
        else {
            echo "<script>alert('Có lỗi xảy ra!');location.href='?page=add'</script>";
        }
    }
?>
<div class="title text-center">
    <h1>Thêm sinh viên</h1>
</div>
<div class="return_index">
    <a href="?page=view">Về trang danh sách</a>
</div>
<form id="myForm" method="post" enctype="multipart/form-data" class="mt-5"> 
    <div class="form-group">
        <label class="form-label">Họ tên sinh viên</label>
        <input type="text" name="name" class="form-control" >
        <p class="mt-1" style="color:red;"><?=isset($error['name']) ? $error['name'] : ''?></p>
    </div>
    <div class="form-group mt-3">
        <label class="form-label">Tuổi sinh viên</label>
        <input type="number" min="1" max="99" name="age" class="form-control" >
        <p class="mt-1" style="color:red;"><?=isset($error['age']) ? $error['age'] : ''?></p>
    </div>
    <div class="form-group mt-3">
        <label class="form-label">Ảnh đại diện</label>
        <input type="file" name="file" class="form-control">
        <p class="mt-1" style="color:red;"><?=isset($error['file']) ? $error['file'] : ''?></p>
    </div>
    <div class="form-group mt-3">
        <label class="form-label">Mô tả sinh viên</label>
        <textarea class="form-control" name="description" id="" cols="30" rows="10"></textarea>
        <p class="mt-1" style="color:red;"><?=isset($error['description']) ? $error['description'] : ''?></p>
    </div>
    <div class="form-group mt-3">
        <button class="btn btn-outline-danger" type="submit" value="submit" name="submit" >Thêm</button>
        <button onclick="clearForm()" class=" btn btn-outline-info" type="button" value="Reset form">Reset</button>
    </div>
</form>
<script>
    function clearForm(){
        document.getElementById("myForm").reset();
    }
</script>
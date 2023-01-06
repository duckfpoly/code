<?php 
    include('connectdb.php');
    $id_students = $_GET['id'];
    if(!empty($_POST['submit'])) { 
        $name = isset($_POST['name']) ? $_POST['name'] : "" ;
        $age = isset($_POST['age']) ? $_POST['age'] : "" ;
        $description = isset($_POST['description']) ? $_POST['description'] : "" ;
        $file_update = isset($_POST['file_update']) ? $_POST['file_update'] : "" ;
        
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
            // Kiểm tra file đã tồn tại thì không ghi thêm
            if(file_exists($target_file)){
                // echo 'Tên file đã tồn tại trên sever, Không được ghi đè';
                $error['image'] = 'Tên file đã tồn tại trên sever, Không được ghi đè';
                $allow_upload = false;
            }
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
        $sql = "UPDATE `students` SET `name`='$name',`age`='$age',`avatar`='$name_images',`description`='$description' WHERE students.id = '{$id_students}'";
        $query = $conn->prepare($sql);
        $query->execute();
        echo "<script>alert('Sửa thông tin sinh viên thành công !');location.href='?page=view'</script>";
    }
?>
<div class="title text-center">
    <h1>Thêm sinh viên</h1>
</div>
<div class="return_index">
    <a href="?page=view">Về trang danh sách</a>
</div>
<form id="myForm" method="post" enctype="multipart/form-data" class="mt-5"> 
    <?php 
        $data = "SELECT * FROM students WHERE id = '{$id_students}'";
        $result = $conn->prepare($data);
        $result->execute();
        foreach($result as $items => $value):
    ?>
    <div class="form-group">
        <label class="form-label">Họ tên sinh viên</label>
        <input type="text" name="name" class="form-control" id="name" value="<?=$value['name']?>">
    </div>
    <div class="form-group mt-3">
        <label class="form-label">Tuổi sinh viên</label>
        <input type="number" min="1" max="99" name="age" id="age" class="form-control" value="<?=$value['age']?>">
    </div>
    <div class="form-group mt-3">
        <label class="form-label">Ảnh đại diện</label>
        <input type="file" name="file" class="form-control" id="avatar" value="<?=$value['avatar']?>">
        <input type="text" disabled name="file_update" class="form-control" id="avatar" value="<?=$value['avatar']?>">
        <img src="images/<?=$value['avatar']?>" width="100px" alt="">
    </div>
    <div class="form-group mt-3">
        <label class="form-label">Mô tả sinh viên</label>
        <textarea class="form-control" name="description" id="description" id="" cols="30" rows="10" value="<?=$value['description']?>"></textarea>
    </div>
    <?php endforeach; ?>
    <div class="form-group mt-3">
        <button class="btn btn-outline-danger" type="submit" value="submit" name="submit" >Sửa</button>
        <button onclick="clearForm()" class=" btn btn-outline-info" type="button" value="Reset form">Reset</button>
    </div>
</form>
<script>
    function clearForm(){
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('description').value = '';
    }
</script>
    
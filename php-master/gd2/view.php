<?php
    include('connectdb.php');
    $sql = "SELECT * FROM `students`";
    $query = $conn->prepare($sql);
    $query->execute();
?>

<table class="table table-hover">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Avatar</th>
            <th>Description</th>
            <th>Created_at</th>
            <th>Thao tác</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($query as $items => $row):?>
        <tr>
            <td><?=$row['id']?></td>
            <td><?=$row['name']?></td>
            <td><?=$row['age']?></td>
            <td><img width="80px" src="images/<?=$row['avatar']?>" alt="ảnh sinh viên"></td>
            <td><?=$row['description']?></td>
            <td><?=$row['created_at']?></td>
            <th><a href="?page=edit&id=<?=$row['id']?>">Sửa</a>&emsp;|&emsp;<a onclick="return confirm('Xác nhận xóa SV ?')" href="?page=delete&id=<?=$row['id']?>">Xóa</a></th>
        </tr>
        <?php endforeach;?>
    </tbody>
</table>
<div class="col-2">
    <a href="?page=add" class="btn btn-outline-danger">Thêm sinh viên</a>
</div>

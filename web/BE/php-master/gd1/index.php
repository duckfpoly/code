<?php
    $data = [
        [
            'so_hieu_chuyen_bay' => 'VNA001',
            'noi_di' => 'Hà Nội',
            'noi_den' => 'TP.HCM',
            'tong_hanh_khach' => '100',
            'thoi_gian_di' => '2022-07-26 05:00:00',
            'thoi_gian_den' => '2022-07-26 07:15:00',
        ],
        [
            'so_hieu_chuyen_bay' => 'VNA002',
            'noi_di' => 'Hải Phòng',
            'noi_den' => 'Đà Nẵng',
            'tong_hanh_khach' => '120',
            'thoi_gian_di' => '2022-07-25 06:00:00',
            'thoi_gian_den' => '2022-07-25 08:15:00',
        ],
        [
            'so_hieu_chuyen_bay' => 'VNA003',
            'noi_di' => 'Phú Quốc',
            'noi_den' => 'Hà Nội',
            'tong_hanh_khach' => '110',
            'thoi_gian_di' => '2022-07-15 10:00:00',
            'thoi_gian_den' => '2022-07-15 11:45:00',
        ],
        [
            'so_hieu_chuyen_bay' => 'VNA004',
            'noi_di' => 'Hải Phòng',
            'noi_den' => 'TP.HCM',
            'tong_hanh_khach' => '150',
            'thoi_gian_di' => '2022-08-25 11:45:00',
            'thoi_gian_den' => '2022-08-25 13:15:00',
        ],
        [
            'so_hieu_chuyen_bay' => 'VNA005',
            'noi_di' => 'Hà Nội',
            'noi_den' => 'Đà Nẵng',
            'tong_hanh_khach' => '140',
            'thoi_gian_di' => '2022-08-08 11:30:00',
            'thoi_gian_den' => '2022-08-08 12:45:00',
        ],
    ];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <div class="container">
        <table class="table table-hover mt-5 text-center">
            <thead>
                <tr>
                    <th>Số hiệu chuyến bay</th>
                    <th>Nơi đi</th>
                    <th>Nơi đến</th>
                    <th>Tổng hành khách</th>
                    <th>Thời gian đi</th>
                    <th>Thời gian đến</th>
                </tr>
            </thead>
            <tbody>
                <?php
                foreach ($data as $items => $value) {
                ?>
                    <tr>
                        <td><?= $value['so_hieu_chuyen_bay'] ?></td>
                        <td><?= $value['noi_di'] ?></td>
                        <td><?= $value['noi_den'] ?></td>
                        <td><?= $value['tong_hanh_khach'] ?></td>
                        <td><?= $value['thoi_gian_di'] ?></td>
                        <td><?= $value['thoi_gian_den'] ?></td>
                    </tr>
                <?php
                }
                ?>
            </tbody>
        </table>
        <br><br><br>
        <form method="post" action="action.php">

            <div class="form-group mb-5">
                <label class="form-label" for="">Số hiệu chuyến bay</label>
                <!-- <input type="text" name="shcb" class="form-control"> -->
                <select name="shcb" id="" class="form-control" required>
                    <option value="" disabled selected>Chọn số hiệu chuyến bay</option>
                <?php
                    foreach ($data as $items => $value):
                ?>
                    <option value="<?= $value['so_hieu_chuyen_bay'] ?>"><?= $value['so_hieu_chuyen_bay'] ?></option>
                <?php
                    endforeach;
                ?>
                    <option value="VNA0010">VNA0010</option>
                </select>
            </div>

            <div class="form-group mt-3 mb-5">
                <label class="form-label" for="">Thời gian đi</label>
                <input type="datetime-local" name="time_start" class="form-control mb-3" required>
            </div>

            <div class="form-group mt-3 mb-5">
                <label class="form-label" for="">Thời gian đến</label>
                <input type="datetime-local" name="time_end" class="form-control mb-3" required>
            </div>

            <div class="form-group text-center">
                <button class="btn btn-outline-info w-25" type="submit" name="submit">Tìm</button>
            </div>

        </form>
    </div>
</body>
</html>

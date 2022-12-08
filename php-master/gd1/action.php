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

function check($timeStart, $timeEnd){
    $input_timeStart = $_POST['time_start'];
    $input_timeEnd = $_POST['time_end'];

    $timestamp_start = strtotime($input_timeStart);
    $timestamp_end = strtotime($input_timeEnd);

    if ($timestamp_start < $timeStart && $timestamp_end < $timeEnd) {
        return ['Chưa bay', 'blue', '#fff'];
    } elseif ($timestamp_start > $timeStart && $timestamp_end > $timeEnd) {
        return ['Đã bay', 'red', '#fff'];
    } elseif ($timestamp_start == $timeStart && $timestamp_end == $timeEnd) {
        return ['Đã đang bay', 'yellow'];
    } else {
        return ['Không hợp lệ', 'white'];
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thông tin chuyến bay</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body>
    <table class="table mt-5 text-center w-75" style="margin:0px auto;">
        <thead>
            <tr>
                <th>Số hiệu chuyến bay</th>
                <th>Nơi đi</th>
                <th>Nơi đến</th>
                <th>Tổng hành khách</th>
                <th>Thời gian đi</th>
                <th>Thời gian đến</th>
                <th>Trạng thái</th>
            </tr>
        </thead>
        <tbody>
            <?php
            if(isset($_POST['submit'])){
                if(isset($_POST['shcb'])){
                    $shcb = $_POST['shcb'];
                    foreach ($data as $items => $value):
                        if ($shcb == $value['so_hieu_chuyen_bay']){
                            $timeStart = $value['thoi_gian_di'];
                            $timeStart_arr_convert = strtotime($timeStart);
                            $timeEnd = $value['thoi_gian_den'];
                            $timeEnd_arr_convert = strtotime($timeEnd);
                            $status = check($timeStart_arr_convert, $timeEnd_arr_convert);
                    ?>
                    <tr style="background-color: <?php echo $status[1] ?>; color:<?= $status[2] ?>;">
                        <td><?= $value['so_hieu_chuyen_bay'] ?></td>
                        <td><?= $value['noi_di'] ?></td>
                        <td><?= $value['noi_den'] ?></td>
                        <td><?= $value['tong_hanh_khach'] ?></td>
                        <td><?= $value['thoi_gian_di'] ?></td>
                        <td><?= $value['thoi_gian_den'] ?></td>
                        <td><?= $status[0] ?></td>
                    </tr>
            <?php
                        }
                     
                    endforeach;
                }
            }
            ?>
        </tbody>
    </table>
</body>

</html>
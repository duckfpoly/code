<template>
    <div class="card mb-4">
        <div class="card-header pb-0">
            <h6>Projects table</h6>
        </div>
        <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
                <table class="table align-items-center justify-content-center mb-0">
                    <thead>
                        <tr>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Tên khóa học</th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Giá</th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Trạng thái</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="course in posts" :key="course.id">
                            <td>
                                <div class="d-flex px-2">
                                    <div >
<!--                                        <img v-bind:src="'../../assets/img/bg.png'" alt="">-->
                                        <img alt="spotify"
                                             class="avatar avatar-sm rounded-circle me-2" v-bind:src="'data:image/jpeg;base64'+course.image_course">
                                    </div>
                                    <div class="my-auto">
                                        <h6 class="mb-0 text-sm">{{ course.name_course }}</h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="text-sm font-weight-bold mb-0">{{ course.price_course }}</p>
                            </td>
                            <td v-if="course.status_course == 0">
                                <span class="text-xs font-weight-bold">Kích hoạt</span>
                            </td>
                            <td v-else>
                                <span class="text-xs font-weight-bold">Khóa</span>
                            </td>
<!--                            <td class="align-middle text-center">-->
<!--                                <div class="d-flex align-items-center justify-content-center">-->
<!--                                    <span class="me-2 text-xs font-weight-bold">60%</span>-->
<!--                                    <div>-->
<!--                                        <div class="progress">-->
<!--                                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="60"-->
<!--                                                 class="progress-bar bg-gradient-info" role="progressbar" style="width: 60%;"></div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </td>-->
                            <td class="align-middle">
<!--                                <button class="btn btn-link text-secondary mb-0">-->
<!--                                    <i aria-hidden="true" class="fa fa-ellipsis-v text-xs"></i>-->
<!--                                </button>-->
                                <button class="btn btn-secondary mb-0">
                                    Detail
                                </button>&emsp;
                                <button class="btn btn-danger mb-0">
                                    Del
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>

<script>
    import axios from 'axios';

    export default {
        name: "projects-table",
        data() {
            return {
                posts: [],
                auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmd1eWVuIER1YyIsInBob25lIjoiMDgyMzU2NTgzMSIsImVtYWlsIjoibmd1eWVuZHVjMTA2MDNAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImV4cCI6MTY2OTgwNTQ4Nn0.PByr6NO_lYgDSnT-KkW0bLBgsNzfIySHO_IofdxiHsw',
                errors: [],
            }
        },
        created() {
            axios.get("https://apidataa.000webhostapp.com/courses"
            // ,{
            //     headers:{
            //         Authorization: 'Bearer ' + this.auth
            //     }
            // }
            )
                .then(response => {
                    this.posts = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }
</script>

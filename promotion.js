function getAll(){
    axios.get('http://localhost:8080/promotions')
        .then(function(response){
            let promotions =response.data;
            let html = ` 
                            <table class="table table-striped table-valign-middle">
                            <thead class="text-bold">
                                 <td>Tiêu đề</td>
                                 <td>Ngày bắt đầu</td>
                                 <td>Ngày kết thúc</td>
                                 <td>Mức giảm giá</td>
                                 <td>Mô tả</td>
                                 <td colspan="2">Thao tác</td>
                                 </thead>
                             `;
            for (let i = 0; i < promotions.length; i++) {
                 html += `<tr>
                                <td>${promotions[i].name}</td>
                                <td>${promotions[i].startDate}</td>
                                <td>${promotions[i].endDate}</td>
                                <td>${promotions[i].discount}</td>
                                <td>${promotions[i].detail}</td>
                                <td><button class="btn-success" onclick="editPromo(${promotions[i].id})"><i class="fa-solid fa-pen-to-square"></i></button></td>
                                <td><button class="btn-danger" onclick="deletePromo(${promotions[i].id},'${promotions[i].title}')"><i class="fa-solid fa-trash-can"></i></button></td>
                             </tr>`
            }
            html += `</table>`;
            document.getElementById('main').innerHTML = html;
        })
}
getAll();

function editPromo(){}
function deletePromo(){}

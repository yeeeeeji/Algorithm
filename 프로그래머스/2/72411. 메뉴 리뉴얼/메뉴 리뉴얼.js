function solution(orders, course) {
    var answer = [];
    var course_list = new Map();
    
    orders = orders.map((order) => order.split("").sort())
    
    course.forEach((c) => {
        orders.forEach((order) => {
            makeCourse("", order, c, course_list);
        })
    })
    
    var new_course = Array.from(course_list.entries()).sort((a, b) => {
        if (a[0].length == b[0].length) return b[1]-a[1];
        return b[0].length - a[0].length;
    })
    
    
    var order_num = new_course[0][1];
    var course_num = new_course[0][0].length;
    
    new_course.forEach((course) => {
        if (course[1] > 1) {
            if (course[0].length < course_num) {
                course_num = course[0].length;
                order_num = course[1];
            }
            if (course[1] == order_num && course[0].length == course_num) answer.push(course[0]);
        }
    })
    
    return answer.sort();
}

function makeCourse(menu, order, course, course_list) {
    if (menu == "" && order.length < course) return;
    if (menu == "" && order.length == course) {
        menu = order.join("");
        course_list.has(menu) ? 
            course_list.set(menu, course_list.get(menu)+1) :
            course_list.set(menu, 1);
        return;
    }
    if (menu.length == course) {
        course_list.has(menu) ? 
            course_list.set(menu, course_list.get(menu)+1) :
            course_list.set(menu, 1);
        return;
    }
    
    for (var i = 0; i < order.length; i++) {
        makeCourse(menu+order[i], order.slice(i+1), course, course_list);
    }
}
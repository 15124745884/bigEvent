var baseUrl = 'http://localhost:8000';
var USER_LOGIN = baseUrl + '/admin/login',//登录接口
    USER_LOGOUT = baseUrl + '/admin/logout',//登出接口
    USER_GETINFO = baseUrl + '/admin/getuser',//获取用户信息（两条数据）
    USER_GETXINXI = baseUrl + '/admin/userinfo_get',//获取用户信息（五条数据）
    USER_INFOEDIT = baseUrl + '/admin/userinfo_edit',//编辑用户信息
    USER_SEARCH = baseUrl + '/admin/search',//文章筛选
    CATEGORY_SEARCH = baseUrl + '/admin/category_search',//文章类别获取
    CATEGORY_ADD = baseUrl +  '/admin/category_add',//新增文章类别
    CATEGORY_EDIT = baseUrl +  '/admin/category_edit',//编辑文章类别
    CATEGORY_DEL = baseUrl + '/admin/category_delete';//删除文章类别
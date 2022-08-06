## React Router 6 学习笔记
- <Routes/> 与 <Route/>
    1. V6 版本中移除了先前的 <Switch> 引入了新的替代者 <Routes>
    2. <Routes> 和 <Route> 要配合使用，且必须要用<Routes> 包裹着 <Route>
    3. <Route> 相当于一个 if语句，如果其路径与当前url匹配，则呈现其对应的组件
    4. <Route caseSensitive> 属性用于指定： 匹配路径时候是否区分大小写，默认是false
    5. 当URL 发生变化时候，<Routes> 都会查看所有其子 <Route> 元素，以找到最佳匹配并呈现组件
    6. <Route>可以嵌套使用，且可以配合 useRoutes()配置“路由表”， 但要通过<Outlet> 组件来渲染子路由
    7. 代码示例：   
        <Routes>
            <Route path="/login element={<Login/>}><Route/>
            <Route path="/home element={<home/>}>
                <Route path="test1" element={<Test1/>}><Route/>
                <Route path="test2" element={<Test2/>}><Route/>
            <Route/>
            <!--  Route也可以不写element属性，此时就是用于展示嵌套的路由，所对应的路径是 /users/xxx -->
            <Route path="/users">
                <Route path='xxx' element={<Demo/>}>
            <Route/>
        <Routes/>
    8. console.log(useResolvePath('/user?id=001&name=philip')) // 输出一个对象，对象含有属性： {pathname:xxx, search:?id=001&name=philip, hash:xxx}
    
    



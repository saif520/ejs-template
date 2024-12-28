const homeController = (req, res) => {
    const data={
        'name':'Sonam',
        'id':8,
        'marks':[40,60,80,70,20]
    }
    res.render('index',data);
};

module.exports = homeController;
const page = {
    home:(req, res)=>{
        res.render('index');
    },
    content:(req, res)=>{
        res.render('content');
    },
    message:(req, res)=>{
        res.render('message');
    },
    contact:(req, res)=>{
        res.render('contact');
    },
    about:(req, res)=>{
        res.render('about');
    }

};

module.exports = page;
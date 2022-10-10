const AuthController = {
    /**
	* @api { post } auth/sign-up Sign Up
	* @apiName Sign Up
	* @apiGroup auth
	* @apiBody  {String} username Username of the user
	* @apiBody  {String} email Email of the user
	* @apiBody  {String} password Password of the user
	* @apiSuccess {String} account User created Succesfully
	* @apiSuccess {String} session Session logged in database Succesfully
	*/
    signUp : (req,res)=>{
        res.status(200).send({status:'200', message:'test done'});
    },

    /**
	* @api { post } auth/sign-in Sign In
	* @apiName Sign In
	* @apiGroup auth
	* @apiBody  {String} email Email of the user
	* @apiBody  {String} password Password of the user
	* @apiSuccess {String} login User Login Succesfully
	* @apiSuccess {String} session Session logged in database Succesfully
    * @apiError  UserNotFound The <code>email or password</code> of the User is not valid.
	*/
    
    signIn : (req,res)=>{
        res.status(200).send({status:'200', message:'test done'});
    },

    /**
	* @api { post } auth/sign-out Sign Out 
	* @apiName Sign Out 
    * @apiGroup auth
	* @apiSuccess {String} logout User logout Succesfully
	* @apiSuccess {String} session Session Deleted from database Succesfully
    * @apiError  UserNotFound User is not logged
	*/

    signOut : (req,res)=>{
        res.status(200).send({status:'200', message:'test done'});
    },


};

module.exports = AuthController;

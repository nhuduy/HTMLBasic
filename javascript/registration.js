// JavaScript Document
function formValid()
{
	f = document.frmRegistration;
	var phone_pattern = /^(\(0\d{1,3}\)\d{7})|(0\d{9,10})$/;
	var email_pattern = /^[a-zA-Z]\w*(\.\w+)*\@\w+(\.\w{2,3})+$/;
	
	if (f.txtUsername.value=="")
	{
		alert("Username can't be empty");
		f.txtUsername.focus();
		return false;
	}
	if (f.txtPassword.value.length < 6)
	{
		alert("Password length must be from 6 to 20 characters");
		f.txtPassword.focus();
		return false;
	}
	if (f.txtPassword.value != f.txtConfirmpassword.value)
	{
		alert("Password must be match with Confirm password");
		f.txtConfirmpassword.focus();
		return false;
	}
	if (f.txtPassword.value == f.txtUsername.value || f.txtConfirmpassword.value==f.txtUsername.value)
	{
		alert("Password doesn't match with User name");
		f.txtConfirmpassword.focus();
		return false;
	}
	
	if(txtPassword.value==f.txtFirstname.value)
	{
		alert("Password doesn't match with First name");
		f.txtFirstname.focus();
		return false;
	}
	if(txtPassword.value==f.txtLastname.value)
	{
		alert("Password doesn't match with Last name");
		f.txtLastname.focus();
		return false;
	}
	
	if (f.txtFirstname.value==f.txtLastname.value && f.txtFirstname.value=="" )
	{
		alert("You must be enter First name and Last name");
		f.txtFirstname.focus();
		return false;
	}
	
	
	if (f.txtFirstname.value=="")
	{
		alert("First name can't be empty");
		f.txtFirstname.focus();
		return false;
	}
	if (f.txtLastname.value=="")
	{
		alert("Last name can't be empty");
		f.txtLastname.focus();
		return false;
	}

	if (f.txtAddress.value=="")
	{
		alert("Address can't be empty");
		f.txtAddress.focus();
		return false;
	}
	if (email_pattern.test(f.txtEmail.value)==false)
	{
		alert("Invalid email address");
		f.txtEmail.value.focus();
		return false;
	}
	if (phone_pattern.test(f.txtPhone.value)==false)
	{
		alert("Invalid phone number");
		f.txtPhone.value.focus();
		return false;
	}
	if (f.rdbtType.checked==false)
	{
		alert("You must be choice Type of account");
		f.rdbtType.focus();
		return false;
	}
	
	if (f.cbNewspaper.checked==false && f.cbFromahand.checked==false && f.cbMagazine.checked==false && f.cbFromasite.checked==false)
	{
		alert("You must select at least one This site");
		f.cbNewspaper.focus();
		return false;
	}
	alert("You: " + f.txtFirstname.value +" "+"are registered successfully");
		return true;
}
<?php 
	include 'header.php';
	include 'sidebar.php';
	include 'bottom.php';
?>
<div class="content">
<table class="contact">
	<tr>
		<td  rowspan="4"class="picowner">
			<img src="images/picofowner.jpg">
		</td>
		<td><p>شماره ثابت:</p></td>
		<td><p>05116093979</p></td>
	</tr>
	<tr>
		<td><p>شماره همراه:</p></td>
		<td><p>09158203969</p></td>
	</tr>
	<tr>
		<td><p>ایمیل:</p></td>
		<td><p>ar_pahlavan@yahoo.com</p></td>
	</tr>
	<tr>
		<td><p>آدرس:</p></td>
		<td><p>مشهد ، خیابان سید رضی، بین سید رضی 42 و 44 ، پلاک 140، طبقه اول</p></td>
	</tr>
	<tr>
		<td colspan="3" class="peygham"><p>کاربر محترم درصورت تمایل به ارسال پیام و یا سفارش کار، لطفا فرم زیر را تکمیل و ارسال نمایید</p></td>
	</tr>
	<form action="#" method="post" name="user_information">
		<tr>
			<td class="cntinfo"><label>نام و نام خانوادگی</label></td>
			<td colspan="2"><input type="text" name="name"/></td>
		</tr>
		<tr>
			<td class="cntinfo"><label>ایمیل</label></td>
			<td colspan="2"><input type="text" name="email"/></td>
		</tr>
		<tr>
			<td class="cntinfo"><label>موضوع</label></td>
			<td colspan="2"><input type="text" name="subject"/></td>
		</tr>
		<tr>
			<td class="cntinfo"><label>متن</label></td>
			<td colspan="2"><textarea name="contect"></textarea></td>
		</tr>
		<tr>
			<td colspan="3" class="submit"><input type="submit" name="submit" value="ارسال"/></td>
		</tr>
	</form>
</table>
</div>
<?php 
	include 'footer.php';
 ?>
<?php 
	include 'header.php';
	include 'sidebar.php';
	include 'bottom.php';
?>
<div class="content">
	<div class="projects w13 right">
		<section>
			<div class="bigpic">
				<?php 
				$path='./images/projects';
				$img_arr=scandir($path);
				foreach ($img_arr as $img) {
					$img_type=explode('.',$img);
					$img_type=strtolower(end($img_type));
					if($img_type=='jpg')
					echo "<div style=\"background-image:url('$path/$img');\"></div>";

				}
				 ?>
			</div>
			<div class="bigtxt">
				<span>this is text1</span>
				<span>this is text2</span>
				<span>this is text3</span>
				<span>this is text4</span>
				<span>this is text5</span>
				<span>this is text6</span>
				<span>this is text7</span>
			</div>
		</section>
		<ul>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
</div>
<div class="clear"></div>
<?php
	include 'footer.php';
 ?>
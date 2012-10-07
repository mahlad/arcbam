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
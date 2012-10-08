<?php 
	include 'header.php';
	include 'sidebar.php';
	include 'bottom.php';
?>
<div class="content">
	<div class="projects w13 right">
		<section class='bigpart'>
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
				<span>this is text8</span>
				<span>this is text9</span>
			</div>
			<div class="clear"></div>
		</section>
		<section class="smallpart">
			<ul class="btn">
				<?php 
				$small_path='./images/projects/small';
				$simg_arr=scandir($small_path);
				foreach ($simg_arr as $simg) {
					$simg_type=explode('.',$simg);
					$simg_type=strtolower(end($simg_type));
					if($simg_type=='jpg'){
						echo "<li style=\"background-image:url('$small_path/$simg');\"></li>";
					}
				}
				 ?>
			</ul>
			
		</section>
		<div class="next btn"></div>
		<div class="prev btn"></div>
	</div>
</div>
<div class="clear"></div>
<?php
	include 'footer.php';
 ?>
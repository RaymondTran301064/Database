<h1>Art</h1>

<p>Here is a list of Art Pieces</p>


  
<?php
 //Print the list of arts
 if(!empty($list)){
   foreach($list As $art){
     $id = htmlspecialchars($art['id'],ENT_QUOTES, 'UTF-8');
	 $name = htmlspecialchars($art['name'],ENT_QUOTES, 'UTF-8');
     $description = htmlspecialchars($art['description'],ENT_QUOTES, 'UTF-8');
     $price = htmlspecialchars($art['price'],ENT_QUOTES, 'UTF-8');
     $category= htmlspecialchars($art['category'],ENT_QUOTES, 'UTF-8');
     $size = htmlspecialchars($art['size'],ENT_QUOTES, 'UTF-8');

  echo "
     <form  method='POST'>
       <div class='art'>
            <input type='hidden' name='code' value= '{$artno}' />
              <ul>
				<li>Name: {$name}</li>
                <li>Description: {$description}</li>
                <li>Price: {$price}</li>
                <li>Category: {$category}</li>
                <li>Size: {$size}</li>
              </ul>
            <input type='submit' value='Add to cart' name='addtocart' />
          </div>
     </form>
           ";

 }
}


 else{
   echo "<h2>art list is empty</h2>";}

 ?>
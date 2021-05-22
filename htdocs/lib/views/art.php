<h1>Art pieces</h1>

<p>Here is a list of art pieces available</p>

<?php
  if(!empty($users)){
     echo "<table border='1'>";
     echo "<tr><th>ID</th> <th>Name</th><th colspan='3'>Actions</th></tr>";
     foreach($art As $art){
            echo "<tr><td>{$art['id']}</td> <td>{$art['name']}</td>
            <td>
               <form action='/art/{$art['id']}' method='GET'>
                  <input type='submit' value='Show' />
               </form>       
            
            
            </td>
            <td>
               <form action='/members/{$art['id']}' method='POST'>
                  <input type='hidden' name='_method' value='delete' />
                  <input class='delete' type='submit' value='Delete' />
               </form>       
            </td>
     
            
            </tr>";
         }
         echo "</table>";
  }
  else{
    echo "<p>No Art pieces</p>";
  }
  
?>

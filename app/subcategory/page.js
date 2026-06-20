import Subcategories from '../components/Subcategories/Subcategories';
import Jumbotron from '../components/Jumbotron/Jumbotron';

function Subcategory({params, searchParams}) {
  return (
    <div>
      <Jumbotron title={searchParams.categoryName} categoryId={searchParams.categoryId} index={searchParams.index} />
      <Subcategories categoryId={searchParams.categoryId}/>
    </div>
  )
}

export default Subcategory
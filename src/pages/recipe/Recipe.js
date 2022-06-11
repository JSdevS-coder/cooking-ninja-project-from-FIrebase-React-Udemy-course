import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

//styles
import './Recipe.css'
import { Link } from 'react-router-dom'
import useTheme from '../../hooks/useTheme'

export default function Recipe() {
  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { data: recipe, isPending, error } = useFetch(url)
  const { mode } = useTheme()

  return (
    <div className={`recipe ${mode}`}>
      {isPending && <div className='loading'>Loading...</div>}
      {error && <div className='error'>{error}</div>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <div>Takes {recipe.cookingTime} to cook</div>
          {/* <div>{recipe.ingredients.join(', ')}</div> */}
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>

          <div className='method'>{recipe.method}</div>
          <Link to='/'>Go Back</Link>
        </>
      )}
    </div>
  )
}

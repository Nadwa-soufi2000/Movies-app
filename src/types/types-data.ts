export type MovieData = {
    id : string,
    title: string,
    image: string,
    history: string
}

export type MovieObject = 
{
    imdbID : string,
    Title : string,
    Poster : string,
    Year : string
}

export type childrenContext = 
{
    children : React.ReactNode
}

export type State = 
{
   WatchList: MovieObject[],
   Watched: MovieObject[]
}

export type actionType = 
{
    type : string,
    payload : MovieObject
}

export type MovieContextType = 
{
   WatchList: MovieObject[],
   Watched: MovieObject[],
   MovieAction : React.Dispatch<actionType>
}
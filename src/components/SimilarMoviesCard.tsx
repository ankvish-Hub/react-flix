import { FC, useState } from "react";
import { useMovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";
import { tmdbApi } from "../tmdbApi";

interface SimilarMoviesCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
}

const SimilarMoviesCard: FC<SimilarMoviesCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  duration,
}) => {
  const { setModalOpen } = useMovieContext();

  const navigate = useNavigate();

  const [imageSrc] = useState<string>(imageUrl);

  const handlePlay = async () => {
    const trailerRes = await tmdbApi.getMovieTrailer(id.toString());
    if (trailerRes.error) {
      navigate(`
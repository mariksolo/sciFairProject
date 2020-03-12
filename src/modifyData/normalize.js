export default function normalize(data, mean, sd) {
    return (data - mean) / sd;
} 
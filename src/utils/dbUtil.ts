// Converts PostgreSQL datetime string to Temporal datetime
function toTemporalDateTime(dateTime: string) {
    return Temporal.PlainDateTime.from(
        dateTime.replace(" ", "T")
    );
}
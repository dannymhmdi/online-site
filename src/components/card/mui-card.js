import React, { Fragment } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Grid,
} from "@mui/material";
const MUiCard = () => {
  return (
    // <Box width={"100%"}>
    <Grid
      container
      // columnSpacing={{ sm: 2 }}
      rowSpacing={{ xs: 2, sm: 2 }}
      style={{ border: "4px solid" }}
    >
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardMedia
            component={"img"}
            height={"auto"}
            width={"100%"}
            image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/72b6ad7a-6f1a-47c2-8c32-2f84de633712/air-jordan-7-retro-mens-shoes-7Zr804.png"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color={"text.secondary"}
              style={{ border: "2px solid" }}
            >
              کتونی
            </Typography>
            <Typography>
              یک شرکت آمریکایی چندملیتی است که در زمینه طراحی، تولید، توسعه و
              پخش محصولاتی مانند کفش ورزشی، پوشاک ورزشی و تجهیزات ورزشی فعالیت
              می‌کند. دفتر مرکزی این کورپوریشن، در نزدیکی شهر بیورتون ایالت
              اورگن در شمال‌باختری ایالات متحده آمریکا واقع است. نایکی بزرگترین
              تولیدکننده در زمینه تولید کفش‌های ورزشی، پوشاک، لوازم و تجهیزات
              ورزشی در جهان به‌شمار می‌رود. ارزش این شرکت در سال ۲۰۱۰ به‌تنهایی
              بالغ بر ۱۰٫۷ میلیارد دلار برآورد شده که این شرکت را در این سال
              برترین تولیدکننده محصولات ورزشی نموده‌است
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" color="success" variant="contained" loading>
              اضافه کردن به سبد خرید
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardMedia
            component={"img"}
            height={"auto"}
            width={"100%"}
            image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/72b6ad7a-6f1a-47c2-8c32-2f84de633712/air-jordan-7-retro-mens-shoes-7Zr804.png"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color={"text.secondary"}
              style={{ border: "2px solid" }}
            >
              کتونی
            </Typography>
            <Typography>
              یک شرکت آمریکایی چندملیتی است که در زمینه طراحی، تولید، توسعه و
              پخش محصولاتی مانند کفش ورزشی، پوشاک ورزشی و تجهیزات ورزشی فعالیت
              می‌کند. دفتر مرکزی این کورپوریشن، در نزدیکی شهر بیورتون ایالت
              اورگن در شمال‌باختری ایالات متحده آمریکا واقع است. نایکی بزرگترین
              تولیدکننده در زمینه تولید کفش‌های ورزشی، پوشاک، لوازم و تجهیزات
              ورزشی در جهان به‌شمار می‌رود. ارزش این شرکت در سال ۲۰۱۰ به‌تنهایی
              بالغ بر ۱۰٫۷ میلیارد دلار برآورد شده که این شرکت را در این سال
              برترین تولیدکننده محصولات ورزشی نموده‌است
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" color="success" variant="contained" loading>
              اضافه کردن به سبد خرید
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardMedia
            component={"img"}
            height={"auto"}
            width={"100%"}
            image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/72b6ad7a-6f1a-47c2-8c32-2f84de633712/air-jordan-7-retro-mens-shoes-7Zr804.png"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color={"text.secondary"}
              style={{ border: "2px solid" }}
            >
              کتونی
            </Typography>
            <Typography>
              یک شرکت آمریکایی چندملیتی است که در زمینه طراحی، تولید، توسعه و
              پخش محصولاتی مانند کفش ورزشی، پوشاک ورزشی و تجهیزات ورزشی فعالیت
              می‌کند. دفتر مرکزی این کورپوریشن، در نزدیکی شهر بیورتون ایالت
              اورگن در شمال‌باختری ایالات متحده آمریکا واقع است. نایکی بزرگترین
              تولیدکننده در زمینه تولید کفش‌های ورزشی، پوشاک، لوازم و تجهیزات
              ورزشی در جهان به‌شمار می‌رود. ارزش این شرکت در سال ۲۰۱۰ به‌تنهایی
              بالغ بر ۱۰٫۷ میلیارد دلار برآورد شده که این شرکت را در این سال
              برترین تولیدکننده محصولات ورزشی نموده‌است
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" color="success" variant="contained" loading>
              اضافه کردن به سبد خرید
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardMedia
            component={"img"}
            height={"auto"}
            width={"100%"}
            image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/72b6ad7a-6f1a-47c2-8c32-2f84de633712/air-jordan-7-retro-mens-shoes-7Zr804.png"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color={"text.secondary"}
              style={{ border: "2px solid" }}
            >
              کتونی
            </Typography>
            <Typography>
              یک شرکت آمریکایی چندملیتی است که در زمینه طراحی، تولید، توسعه و
              پخش محصولاتی مانند کفش ورزشی، پوشاک ورزشی و تجهیزات ورزشی فعالیت
              می‌کند. دفتر مرکزی این کورپوریشن، در نزدیکی شهر بیورتون ایالت
              اورگن در شمال‌باختری ایالات متحده آمریکا واقع است. نایکی بزرگترین
              تولیدکننده در زمینه تولید کفش‌های ورزشی، پوشاک، لوازم و تجهیزات
              ورزشی در جهان به‌شمار می‌رود. ارزش این شرکت در سال ۲۰۱۰ به‌تنهایی
              بالغ بر ۱۰٫۷ میلیارد دلار برآورد شده که این شرکت را در این سال
              برترین تولیدکننده محصولات ورزشی نموده‌است
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" color="success" variant="contained" loading>
              اضافه کردن به سبد خرید
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardMedia
            component={"img"}
            height={"auto"}
            width={"100%"}
            image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/72b6ad7a-6f1a-47c2-8c32-2f84de633712/air-jordan-7-retro-mens-shoes-7Zr804.png"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color={"text.secondary"}
              style={{ border: "2px solid" }}
            >
              کتونی
            </Typography>
            <Typography>
              یک شرکت آمریکایی چندملیتی است که در زمینه طراحی، تولید، توسعه و
              پخش محصولاتی مانند کفش ورزشی، پوشاک ورزشی و تجهیزات ورزشی فعالیت
              می‌کند. دفتر مرکزی این کورپوریشن، در نزدیکی شهر بیورتون ایالت
              اورگن در شمال‌باختری ایالات متحده آمریکا واقع است. نایکی بزرگترین
              تولیدکننده در زمینه تولید کفش‌های ورزشی، پوشاک، لوازم و تجهیزات
              ورزشی در جهان به‌شمار می‌رود. ارزش این شرکت در سال ۲۰۱۰ به‌تنهایی
              بالغ بر ۱۰٫۷ میلیارد دلار برآورد شده که این شرکت را در این سال
              برترین تولیدکننده محصولات ورزشی نموده‌است
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" color="success" variant="contained" loading>
              اضافه کردن به سبد خرید
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardMedia
            component={"img"}
            height={"auto"}
            width={"100%"}
            image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/72b6ad7a-6f1a-47c2-8c32-2f84de633712/air-jordan-7-retro-mens-shoes-7Zr804.png"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color={"text.secondary"}
              style={{ border: "2px solid" }}
            >
              کتونی
            </Typography>
            <Typography>
              یک شرکت آمریکایی چندملیتی است که در زمینه طراحی، تولید، توسعه و
              پخش محصولاتی مانند کفش ورزشی، پوشاک ورزشی و تجهیزات ورزشی فعالیت
              می‌کند. دفتر مرکزی این کورپوریشن، در نزدیکی شهر بیورتون ایالت
              اورگن در شمال‌باختری ایالات متحده آمریکا واقع است. نایکی بزرگترین
              تولیدکننده در زمینه تولید کفش‌های ورزشی، پوشاک، لوازم و تجهیزات
              ورزشی در جهان به‌شمار می‌رود. ارزش این شرکت در سال ۲۰۱۰ به‌تنهایی
              بالغ بر ۱۰٫۷ میلیارد دلار برآورد شده که این شرکت را در این سال
              برترین تولیدکننده محصولات ورزشی نموده‌است
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" color="success" variant="contained" loading>
              اضافه کردن به سبد خرید
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardMedia
            component={"img"}
            height={"auto"}
            width={"100%"}
            image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/72b6ad7a-6f1a-47c2-8c32-2f84de633712/air-jordan-7-retro-mens-shoes-7Zr804.png"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color={"text.secondary"}
              style={{ border: "2px solid" }}
            >
              کتونی
            </Typography>
            <Typography>
              یک شرکت آمریکایی چندملیتی است که در زمینه طراحی، تولید، توسعه و
              پخش محصولاتی مانند کفش ورزشی، پوشاک ورزشی و تجهیزات ورزشی فعالیت
              می‌کند. دفتر مرکزی این کورپوریشن، در نزدیکی شهر بیورتون ایالت
              اورگن در شمال‌باختری ایالات متحده آمریکا واقع است. نایکی بزرگترین
              تولیدکننده در زمینه تولید کفش‌های ورزشی، پوشاک، لوازم و تجهیزات
              ورزشی در جهان به‌شمار می‌رود. ارزش این شرکت در سال ۲۰۱۰ به‌تنهایی
              بالغ بر ۱۰٫۷ میلیارد دلار برآورد شده که این شرکت را در این سال
              برترین تولیدکننده محصولات ورزشی نموده‌است
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" color="success" variant="contained" loading>
              اضافه کردن به سبد خرید
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>

    // </Box>
  );
};

export default MUiCard;
